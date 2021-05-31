import os
import glob
import re

def check_for_bad_links(doc_path, links, image_links, data):
    reg = r'\[.+?\]\((\/.*?)\)'
    matches = re.findall(reg, data)
    for match in matches:        
        if match not in links:
            print(f"Dead link: {match} found in {doc_path}")

    # Check image links
    reg = r'!\[\]\((\/.*?)\)'
    matches = re.findall(reg, data)
    for match in matches:
        if match not in image_links:
            print(f"Dead image link: {match} found in {doc_path}")

def crawl_docs():
    file_paths = []
    links = []
    image_links = []

    base_directory = os.path.join(os.path.dirname(os.path.dirname(__file__)), "docs")
    for doc_path in glob.glob(base_directory + "/**/*.md", recursive=True):
        links.append(("/" + os.path.relpath(doc_path, base_directory)).replace(".md", "").replace("\\","/"))
        file_paths.append(doc_path)
    
    base_directory = os.path.join(os.path.dirname(os.path.dirname(__file__)), "docs", "public")
    for doc_path in glob.glob(base_directory + "/**/*", recursive=True):
        image_links.append(("/" + os.path.relpath(doc_path, base_directory)).replace("\\","/"))

    return file_paths, links, image_links

def main():
    file_paths, links, image_links = crawl_docs()

    for doc_path in file_paths:
        with open(doc_path, "r", encoding='utf-8') as f:
            check_for_bad_links(os.path.relpath(doc_path, os.getcwd()), links, image_links, f.read())

main()