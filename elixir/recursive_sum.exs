defmodule RecursiveSum do
  def sum(tuple) when tuple_size(tuple) > 0 do
    elem(tuple, 0) + sum(Tuple.delete_at(tuple, 0))
  end

  def sum(_tuple) do
    0
  end
end

tuple = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
IO.puts(RecursiveSum.sum(tuple)) # returns 55
