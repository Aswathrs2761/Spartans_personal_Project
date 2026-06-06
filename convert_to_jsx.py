import re
from pathlib import Path

root = Path('.')
# file suffixes to convert
suffix_map = {
    '.ts': '.js',
    '.tsx': '.jsx',
}

# explicit files to ignore or keep
ignore_files = {'src/vite-env.d.ts'}

# patterns to clean

def remove_import_type_lines(text):
    return re.sub(r'^\s*import\s+type\s+[^\n]+\n', '', text, flags=re.MULTILINE)


def remove_type_specifiers_in_imports(text):
    def repl(match):
        inner = match.group(1)
        inner = re.sub(r'\btype\s+', '', inner)
        return '{' + inner + '}'
    return re.sub(r'\{([^}]*)\}', repl, text)


def remove_type_annotations(text):
    text = re.sub(r':\s*([^=\[\]\(\)\{\};,<>]+(?:<[^>]+>)?(?:\s*\|\s*[^=\[\]\(\)\{\};,<>]+)*)\s*(?=[,\)\n;=])', '', text)
    text = re.sub(r'\s*:\s*[^\n=;]+(?=\n)', '', text)
    text = re.sub(r'\s+as\s+[A-Za-z0-9_\[\]<>\.\|\s&]+', '', text)
    return text


def remove_generic_type_arguments(text):
    text = re.sub(r'\b([A-Za-z0-9_\.]+)\s*<\s*([^>]+)\s*>', r'\1', text)
    return text


def remove_interface_and_type_blocks(text):
    lines = text.splitlines(True)
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.lstrip()
        if re.match(r'^(export\s+)?interface\s+\w+', stripped) or re.match(r'^(export\s+)?type\s+\w+', stripped):
            if '{' in line:
                brace = 0
                while i < len(lines):
                    for ch in lines[i]:
                        if ch == '{':
                            brace += 1
                        elif ch == '}':
                            brace -= 1
                    i += 1
                    if brace <= 0:
                        break
                continue
            else:
                i += 1
                continue
        out.append(line)
        i += 1
    return ''.join(out)


def normalize_extensions(text):
    text = re.sub(r"(\.tsx|\.ts)(['\"])", r'.js\2', text)
    text = re.sub(r"(\./[^'\"]*?)\.jsx(['\"])", r'\1.jsx\2', text)  # keep jsx
    return text


def convert_file(path: Path):
    content = path.read_text(encoding='utf-8')
    original = content
    content = remove_import_type_lines(content)
    content = remove_type_specifiers_in_imports(content)
    content = remove_interface_and_type_blocks(content)
    content = remove_generic_type_arguments(content)
    content = remove_type_annotations(content)
    content = content.replace('!', '')
    content = normalize_extensions(content)
    if content != original:
        path.write_text(content, encoding='utf-8')
        print(f'Updated content: {path}')


for path in root.rglob('*'):
    if path.is_file() and path.suffix in suffix_map and str(path).replace('\\', '/').strip('./') not in ignore_files:
        convert_file(path)

for path in sorted(root.rglob('*')):
    if path.is_file() and path.suffix in suffix_map and str(path).replace('\\', '/').strip('./') not in ignore_files:
        new_path = path.with_suffix(suffix_map[path.suffix])
        if new_path.exists():
            new_path.unlink()
        path.rename(new_path)
        print(f'Renamed {path} -> {new_path}')
