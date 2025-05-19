$(document).ready(function() {
    $(".convert").click(function() {
        event.preventDefault();
        if ($("#Fahrenheit").val()) {
            var f = Number($("#Fahrenheit").val());
            var c = (f - 32) * (5 / 9);
            var k = c + 273.15;
            var r = f + 459.67;
            $('#Celsius').val(parseFloat(c.toFixed(4)));
            $("#Kelvin").val(parseFloat(k.toFixed(4)));
            $("#Rankine").val(parseFloat(r.toFixed(4)));
        } else if ($("#Celsius").val()) {
            var c = Number($("#Celsius").val());
            var f = (c * (9 / 5)) + 32;
            var k = c + 273.15;
            var r = f + 459.67;
            $('#Fahrenheit').val(parseFloat(f.toFixed(4)));
            $("#Kelvin").val(parseFloat(k.toFixed(4)));
            $("#Rankine").val(parseFloat(r.toFixed(4)));

✅ Session 6: Basics of Python
1. Hello World Script
python
Copy
Edit
# hello.py
print("Hello World")
2. Data Types Example
python
Copy
Edit
# datatypes.py
integer_num = int(input("Enter an integer: "))
float_num = float(input("Enter a float: "))
string_value = input("Enter a string: ")

print(f"Integer: {integer_num}, Float: {float_num}, String: '{string_value}'")
3. User Input with If-Else and Loop
python
Copy
Edit
# check_even_odd.py
num = int(input("Enter a number: "))
if num % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")

# While Loop Example
i = 1
while i <= 5:
    print("Loop count:", i)
    i += 1
✅ Session 7 & 8: Lists and Dictionaries
4. Dictionary Operations
python
Copy
Edit
# dictionary_demo.py
person = {"name": "Alice", "age": 25}
print("Original:", person)

# Add and Delete
person["city"] = "Pune"
del person["age"]
print("Updated:", person)
5. Loop with Dictionary
python
Copy
Edit
for key, value in person.items():
    print(f"{key}: {value}")
6. List Operations
python
Copy
Edit
# list_demo.py
numbers = [5, 3, 7, 1]
numbers.append(10)
numbers.insert(1, 6)
numbers.remove(7)
numbers.sort()
numbers.reverse()
print("List:", numbers)
✅ Session 9: Tuples, Strings, and Mapping
7. Tuple Example
python
Copy
Edit
# tuple_demo.py
data = (1, 2, 3, 4)
print("Tuple:", data)

# Access via loop
for item in data:
    print(item)

# Tuples are immutable: can't insert/delete
8. String Split and Join
python
Copy
Edit
text = input("Enter some words: ")
words = text.split()
print("Split words:", words)
joined = "-".join(words)
print("Joined string:", joined)
✅ Session 10: Built-in Functions and Arguments
9. Using Built-in Functions
python
Copy
Edit
# builtin_demo.py
x = "hello"
print(type(x), str(123), dir(x))
✅ Session 11: Regular Expressions
python
Copy
Edit
import re

text = input("Enter some text: ")

# Match single character (except newline)
print("Single character matches:", re.findall(r".", text))

# Match a word
print("Words:", re.findall(r"\w+", text))

# Decimal word
print("Decimal numbers:", re.findall(r"\d+\.\d+", text))

# Whitespace
print("Whitespace characters:", re.findall(r"\s", text))

# Non-whitespace
print("Non-whitespace characters:", re.findall(r"\S", text))
✅ Session 12: File System Operations
11. File/Folder Handling
python
Copy
Edit
import os

path = input("Enter path: ")

print("Current Directory:", os.getcwd())
print("List of files/folders:", os.listdir(path))
print("Absolute Path:", os.path.abspath(path))
print("Is file exists?", os.path.exists(path))

if not os.path.exists("new_folder"):
    os.mkdir("new_folder")
    print("Directory Created")

if os.path.exists("new_folder"):
    os.rmdir("new_folder")
    print("Directory Removed")
✅ Session 13-14: File Handling and Web Reading
12. File Read/Write and Analysis
python
Copy
Edit
filename = "sample.txt"

# Writing
with open(filename, "w") as f:
    f.write("Hello world\nWelcome to Python\n")

# Reading and Count
with open(filename, "r") as f:
    lines = f.readlines()
    words = sum(len(line.split()) for line in lines)
    print("Content:", "".join(lines))
    print("Lines:", len(lines))
    print("Words:", words)
13. Read a Web Page (requires internet)
python
Copy
Edit
import urllib.request

url = input("Enter URL (e.g., https://example.com): ")
response = urllib.request.urlopen(url)
html = response.read().decode('utf-8')
print(html[:500])  # Print first 500 characters
✅ Session 15: Socket Programming
14. Simple Server and Client
server.py

python
Copy
Edit
import socket

server = socket.socket()
server.bind(('localhost', 12345))
server.listen(1)
print("Waiting for connection...")
conn, addr = server.accept()
print("Connected by", addr)
data = conn.recv(1024).decode()
print("Received from client:", data)
conn.send("Hello from server!".encode())
conn.close()
client.py

python
Copy
Edit
import socket

client = socket.socket()
client.connect(('localhost', 12345))
client.send("Hello Server!".encode())
data = client.recv(1024).decode()
print("Received from server:", data)
client.close()
✅ Session 16: Exploit Simulation via Socket
Note: Simplified version to simulate “suspicious message” injection.

python
Copy
Edit
# exploit_sim.py
import socket

def exploit_server():
    server = socket.socket()
    server.bind(('localhost', 9999))
    server.listen(1)
    conn, addr = server.accept()
    print("Connected:", addr)
    data = conn.recv(1024).decode()
    if "DROP" in data:
        print("Exploit attempt detected!")
    else:
        print("Safe message:", data)
    conn.close()

def exploit_client():
    client = socket.socket()
    client.connect(('localhost', 9999))
    client.send("DROP TABLE users;".encode())
    client.close()
✅ Session 17: Debugging and Automation
15. Basic Debugging
python
Copy
Edit
def debug_function(x):
    assert x != 0, "Zero is not allowed"
    return 10 / x

num = int(input("Enter number: "))
print(debug_function(num))

            
        } else if ($("#Kelvin").val()) {
            var k = Number($("#Kelvin").val());
            var c = k - 273.15;
            var f = (c * (9 / 5)) + 32;
            var r = f + 459.67;
            $('#Celsius').val(parseFloat(c.toFixed(4)));
            $("#Fahrenheit").val(parseFloat(f.toFixed(4)));
            $("#Rankine").val(parseFloat(r.toFixed(4)));

        } else if ($("#Rankine").val()) {
            var r = Number($("#Rankine").val());
            var f = r - 459.67;
            var c = (f - 32) * (5 / 9);
            var k = c + 273.15;
            $("#Fahrenheit").val(parseFloat(f.toFixed(4)));
            $('#Celsius').val(parseFloat(c.toFixed(4)));
            $("#Kelvin").val(parseFloat(k.toFixed(4)));
        } else {
            alert("Please Enter a Number to Convert");
        }
    })
})

$(".reset").click(function() {
    location.reload(true);
})
