from pymdownx.superfences import fence_code_format

def custom_fence_code_format(source, language, class_name, options, md, **kwargs):
    """
    Custom fence code format to add data attributes
    """
    # Ajoutez ici les attributs `data-*` personnalisés
    attributes = {
        "class": class_name,
        "data-language": "Ligne de commande",
        "data-prompt": "$"
    }
    if options.get("prompt"):
        attributes["data-prompt"] = options["prompt"]

    # Convertir les attributs en chaîne
    attributes_str = " ".join([f'{key}="{value}"' for key, value in attributes.items()])

    # Utiliser la fonction `fence_code_format` originale pour le contenu du bloc
    return f'<pre {attributes_str}><code class="{class_name}">{source}</code></pre>\n'