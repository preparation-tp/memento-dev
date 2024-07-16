import type { TabItemProps } from "@docusaurus/theme-common/internal";
import type { ReactElement } from "react";
import type { Props } from "@theme/Tabs";

import {
  useScrollPositionBlocker,
  sanitizeTabsChildren,
  useTabs,
} from "@docusaurus/theme-common/internal";

import useIsBrowser from "@docusaurus/useIsBrowser";
import { cloneElement, useRef } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const TabList = ({
  className,
  block,
  selectedValue,
  selectValue,
  tabValues,
}: Props & ReturnType<typeof useTabs>) => {
  const tabsHolderRef = useRef<HTMLDivElement | null>(null);
  const tabRefs: (HTMLLIElement | null)[] = [];
  const { blockElementScrollPositionUntilNextRender } =
    useScrollPositionBlocker();

  const scrollIntoTab = (tab: HTMLLIElement) => {
    const tabsHolder = tabsHolderRef.current;
    if (!tabsHolder) return;

    const { offsetLeft, offsetWidth } = tab;

    const tabLeft = offsetLeft - tabsHolder.offsetLeft;
    const scrollLeft = tabsHolder.scrollLeft;

    const tabRight = tabLeft + offsetWidth;
    const scrollRight = scrollLeft + tabsHolder.offsetWidth;

    const paddingWidth = 16;
    const spaceBetweenTabs = 8;

    const scrollOptions = {
      left: tabLeft + paddingWidth - spaceBetweenTabs,
      right:
        tabRight - tabsHolder.offsetWidth + paddingWidth + spaceBetweenTabs,
    };

    if (tabLeft < scrollLeft) {
      tabsHolder.scrollTo({
        left: scrollOptions.left,
        behavior: "smooth",
      });
    } else if (tabRight > scrollRight) {
      tabsHolder.scrollTo({
        left: scrollOptions.right,
        behavior: "smooth",
      });
    }
  };

  const handleTabChange = (
    event:
      | React.FocusEvent<HTMLLIElement>
      | React.MouseEvent<HTMLLIElement>
      | React.KeyboardEvent<HTMLLIElement>
  ) => {
    const newTab = event.currentTarget;
    const newTabIndex = tabRefs.indexOf(newTab);
    const newTabValue = tabValues[newTabIndex]!.value;

    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab);
      selectValue(newTabValue);
      scrollIntoTab(newTab);
    }
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    let focusElement: HTMLLIElement | null = null;

    switch (event.key) {
      case "Enter": {
        handleTabChange(event);
        break;
      }
      case "ArrowRight": {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
        focusElement = tabRefs[nextTab] ?? tabRefs[0]!;
        break;
      }
      case "ArrowLeft": {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
        focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1]!;
        break;
      }
      default:
        break;
    }

    focusElement?.focus();
  };

  return (
    <div
      className="tabs-holder -mb-4 max-w-full overflow-auto"
      ref={tabsHolderRef}
    >
      <ul
        role="tablist"
        aria-orientation="horizontal"
        className={clsx("w-max tabs", { "tabs--block": block }, className)}
      >
        {tabValues.map(({ value, label, attributes }) => (
          <li
            role="tab"
            tabIndex={selectedValue === value ? 0 : -1}
            aria-selected={selectedValue === value}
            key={value}
            ref={(tabControl) => tabRefs.push(tabControl)}
            onKeyDown={handleKeydown}
            onClick={handleTabChange}
            {...attributes}
            className={clsx(
              "tabs__item",
              styles.tabItem,
              attributes?.className as string,
              { "tabs__item--active": selectedValue === value }
            )}
          >
            {label ?? value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TabContent = ({
  lazy,
  children,
  selectedValue,
}: Props & ReturnType<typeof useTabs>) => {
  const childTabs = (Array.isArray(children) ? children : [children]).filter(
    Boolean
  ) as ReactElement<TabItemProps>[];
  if (lazy) {
    const selectedTabItem = childTabs.find(
      (tabItem) => tabItem.props.value === selectedValue
    );
    if (!selectedTabItem) {
      // fail-safe or fail-fast? not sure what's best here
      return null;
    }
    return cloneElement(selectedTabItem, { className: "margin-top--md" });
  }
  return (
    <div className="margin-top--md">
      {childTabs.map((tabItem, i) =>
        cloneElement(tabItem, {
          key: i,
          hidden: tabItem.props.value !== selectedValue,
        })
      )}
    </div>
  );
};

const TabsComponent = (props: Props): JSX.Element => {
  const tabs = useTabs(props);
  return (
    <div className={clsx("tabs-container", styles.tabList)}>
      <TabList {...tabs} {...props} />
      <TabContent {...tabs} {...props} />
    </div>
  );
};

const Tabs = (props: Props): JSX.Element => {
  const isBrowser = useIsBrowser();
  return (
    <TabsComponent
      // Remount tabs after hydration
      // Temporary fix for https://github.com/facebook/docusaurus/issues/5653
      key={String(isBrowser)}
      {...props}
    >
      {sanitizeTabsChildren(props.children)}
    </TabsComponent>
  );
};

export default Tabs;
