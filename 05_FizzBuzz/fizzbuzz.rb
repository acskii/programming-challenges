# acskii :p

def fizzbuzz(range)
  if range.is_a? Range 
    for i in range
      print "#{i}"
      if (i % 3 == 0) && (i % 5 == 0)
        print " - FizzBuzz\n"
      elsif i % 3 == 0
        print " - Fizz\n"
      elsif i % 5 == 0
        print " - Buzz\n"
      else 
        print "\n"
      end
    end
  else
    puts "Only a range is accepted as an argument."
  end
end

fizzbuzz(1..15)
puts "-"*10
fizzbuzz(1..25)
puts "-"*10
fizzbuzz(10..15)
puts "-"*10