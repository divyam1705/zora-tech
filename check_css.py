
def check_css_braces(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    stack = []
    
    for i, line in enumerate(lines):
        line_num = i + 1
        for char in line:
            if char == '{':
                stack.append(line_num)
            elif char == '}':
                if not stack:
                    print(f"Error: Unexpected closing brace '}}' at line {line_num}")
                else:
                    stack.pop()

    if stack:
        print(f"Error: Unclosed brace '{{' opening at line {stack[-1]}")
        print(f"Total unclosed braces: {len(stack)}")
    else:
        print("Braces are balanced.")

if __name__ == "__main__":
    check_css_braces(r"d:\Work & Projects\Bot2Do\Zora Design\src\index.css")
