def pre_build_hook(config):
    """Add support for Prisma syntax highlighting."""
    config.extra['prisma_lang'] = True