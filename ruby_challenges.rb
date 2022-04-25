# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

## I AM WRITNG PSEUDO CODE ON THIS CHALLENGE BECAUSE I FOUND IT HELPS ME A LITTLE MORE WHEN I DO.##

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def beverages(array, letter)
  array.select do |value|
 value.include?(letter)
  end
end 
p beverages beverages_array, letter_o
p beverages beverages_array, letter_t

# PSEUDO CODE
# Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter
# I will use .select to iterate through my array and find the words containing 'o' and 't' it works like a the .filter hof
# I will use the |value| extenstion of .select that will call on every value of the array to look for my filter requests as it loops through the array
# After we filter and go through each value, we ask that the values included in our search search for a letter of iether o or t
#  by definetley including the search with the include? we are ensuring we do not get a return on anything other than what we ask for which in this case is 'o' or 't'
# 

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# # # Expected output: 76

nums_array2 = [25, 17, 47, 11]
# # Expected output: 100

def sum(array)
  array.sum

end

p sum nums_array1
p sum nums_array2
 

# PSUEDO CODE 
# Create a method that takes in a array of number and returns the sum of the numbers
# first I am going to add the sum of the array using .sum
# then to print I am going to call on my method and each array instance to get my expected outcomes
# This was probably the easiest one for me and called it a win for me to understand with almost no research! :)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model
  def initialize (model)
      @model = model
      @wheels = 2
      @current_speed = 0
  end
  def get_current_speed
      @current_speed
  end
  def bike_info
      "The #{model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
  end
  def pedal_faster speed
      @current_speed = @current_speed + speed
  end
  def brake speed
      if @current_speed > speed
          @current_speed = @current_speed - speed
      elsif @current_speed < speed
          @current_speed = 0
      elsif @current_speed == speed
          @current_speed = 0
     end
  end
end


# PSEUDO CODE 
# First I created a class called Bike 
# Then I intialized my model, wheels and current_speed to have thier respective values
# Then I used the ruby hash syntax to create a sentence and call my declared instance variables
# Then I created a new class of brake speed 
# Then in there I added the various methods to be called on that class using elsif in my method
# Finally I call all my previous methods on question 3b.




# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

my_bike = Bike.new('Trek')
# p my_bike.bike_info
my_bike.pedal_faster 10
my_bike.pedal_faster 18
my_bike.brake 5
# my_bike.brake 23
p my_bike.get_current_speed
p my_bike.bike_info