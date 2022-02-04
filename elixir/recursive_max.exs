defmodule RecursiveMax do
  def max(tuple) when tuple_size(tuple) > 2 do
    max_from_call_stack = max(Tuple.delete_at(tuple, 0))

    case elem(tuple, 0) do
      x when x > max_from_call_stack ->
        x
      _ ->
        max_from_call_stack
    end
  end

  def max(tuple) when tuple_size(tuple) == 2 do
    case elem(tuple, 0) do
      x when x > elem(tuple, 1) ->
        x
      _ ->
        elem(tuple, 1)
    end
  end

  def max(tuple) when tuple_size(tuple) == 1 do
    elem(tuple, 0)
  end

  def max(_tuple) do
    0
  end
end

tuple = {2, 5, 6, 1, 9, 3, 8, 7, 11}
IO.inspect(RecursiveMax.max(tuple))
