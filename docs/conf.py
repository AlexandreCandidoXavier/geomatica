# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------
import os
import sys
import cloud_sptheme as csp

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
html_theme = os.environ.get("SPHINX_THEME") or 'cloud'

html_theme_options = {}
if csp.is_cloud_theme(html_theme):
    html_theme_options.update(
        borderless_decor=True,
        sidebarwidth="3in",
        hyphenation_language="en",
    )

# Add any paths that contain custom themes here, relative to this directory.
if csp.is_cloud_theme(html_theme):
    # so build works even if package isn't installed
    html_theme_path = [csp._theme_dir]

# sys.path.insert(0, os.path.abspath('/home/alexandre/Dropbox/topo/geomatica/venv/lib/python3.8/site-packages/'))

project = 'Livro de Geomática'
copyright = '2021, Alexandre C Xavier'
author = 'Alexandre C Xavier'

# The full version, including alpha/beta/rc tags
release = '0.1'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
# 'sphinxcontrib.stuffcounter'
extensions = ['sphinx.ext.todo', 'sphinx.ext.mathjax', 'sphinxcontrib.bibtex', 'cloud_sptheme.ext.table_styling',
]
# imgmath_image_format = 'png'
# imgmath_dvipng_args = ['-gamma', '1.5', '-D', '400', '-bg', 'Transparent']

# imgmath_image_format = 'svg'
# imgmath_font_size = 10

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# The language for content autogenerated by Sphinx. Refer to documentation
# for a list of supported languages.
#
# This is also used if you do content translation via gettext catalogs.
# Usually you set "language" from the command line for these cases.
language = 'pt_PT'

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
# html_theme = 'alabaster'
html_theme = 'sphinx_rtd_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# references
bibtex_bibfiles = ['refs.bib']

# numerando figuras
numfig = True
numfig_format = {
    'figure': 'Figura %s'
    }
numfig_secnum_depth = 1

