# Numbers
# Addition
1 + 1 #=> 2

# Subtraction
2 - 1 #=> 1

# Multiplication
2 * 2 #=> 4

# Division
10 / 5 #=> 2

# Exponent
2 ** 2 #=> 4
3 ** 4 #=> 81

# Modulus (find the remainder of division)
8 % 2 #=> 0  (8 / 2 = 4; no remainder)
10 % 4 #=> 2  (10 / 4 = 2 with a remainder of 2)

# Floating point numbers
17 / 5 #=> 3, not 3.4
17 / 5.0 #=> 3.4

# Converting number types
# To convert an integer to a float:
13.to_f #=> 13.0

# To convert a float to an integer:
13.0.to_i #=> 13
13.9.to_i #=> 13

# even?
6.even? #=> true
7.even? #=> false

#o dd?
6.odd? #=> false
7.odd? #=> true

# Concatenation
# With the plus operator:
"Welcome " + "to " + "Odin!" #=> "Welcome to Odin!"

# With the shovel operator:
"Welcome " << "to " << "Odin!" #=> "Welcome to Odin!"

# With the concat method:
"Welcome ".concat("to ").concat("Odin!") #=> "Welcome to Odin!"

#Substrings
"hello"[0] #=> "h"

"hello"[0..1] #=> "he"

"hello"[0, 4] #=> "hell"

"hello"[-1] #=> "o"


# Exercise
irb(main):001:0> puts "Hello \n\nHello"
Hello

Hello
=> nil


# Interpolation
name = "Odin"

puts "Hello, #{name}" #=> "Hello, Odin"
puts 'Hello, #{name}' #=> "Hello, #{name}"

# capitalize
"hello".capitalize #=> "Hello"

# include?
"hello".include?("lo") #=> true
"hello".include?("z") #=> false

# upcase
"hello".upcase #=> "HELLO"

# downcase
"Hello".downcase #=> "hello"

# empty?
"hello".empty? #=> false
"".empty? #=> true

# length
"hello".length #=> 5

# reverse
"hello".reverse #=> "olleh"

# split
"hello world".split #=> ["hello", "world"]
"hello".split("") #=> ["h", "e", "l", "l", "o"]

# strip
" hello, world   ".strip #=> "hello, world"

# Exercise
"he77o".sub("7", "l") #=> "hel7o"

"he77o".gsub("7", "l") #=> "hello"

"hello".insert(-1, " dude") #=> "hello dude"

"hello world".delete("l") #=> "heo word"

"!".prepend("hello, ", "world") #=> "hello, world!"

5.to_s #=> "5"

nil.to_s #=> ""

:symbol.to_s #=> "symbol"
:my_symbol #Create a symbol

# Symbols vs. strings
"string" == "string" #=> true

"string".object_id == "string".object_id #=> false

:symbol.object_id == :symbol.object_id #=> true
