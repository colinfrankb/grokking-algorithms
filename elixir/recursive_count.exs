defmodule RecursiveCount do
  def count(tuple) when tuple_size(tuple) > 0 do
    1 + count(Tuple.delete_at(tuple, 0))
  end

  def count(_tuple) do
    0
  end
end

tuple = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
IO.puts(RecursiveCount.count(tuple)) # returns 55
