import os
import shutil

def on_post_build(config, **kwargs):
    """
    Rename the generated sitemap.xml to sitemap-main.xml after build.
    This allows us to use a custom sitemap index file.
    """
    site_dir = config['site_dir']

    # Paths for the sitemap files
    original_sitemap = os.path.join(site_dir, 'sitemap.xml')
    renamed_sitemap = os.path.join(site_dir, 'sitemap-main.xml')
    original_sitemap_gz = os.path.join(site_dir, 'sitemap.xml.gz')
    renamed_sitemap_gz = os.path.join(site_dir, 'sitemap-main.xml.gz')
    custom_sitemap = os.path.join(config['docs_dir'], 'sitemap.xml')

    # Rename the generated sitemap files
    if os.path.exists(original_sitemap):
        shutil.move(original_sitemap, renamed_sitemap)
        print(f"Renamed sitemap.xml to sitemap-main.xml")

    if os.path.exists(original_sitemap_gz):
        shutil.move(original_sitemap_gz, renamed_sitemap_gz)
        print(f"Renamed sitemap.xml.gz to sitemap-main.xml.gz")

    # Copy our custom sitemap index to the site directory
    if os.path.exists(custom_sitemap):
        shutil.copy(custom_sitemap, site_dir)
        print(f"Copied custom sitemap index to site directory")
