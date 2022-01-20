defmodule SelectionSort do
  defp find_smallest_index(tuple, i, n, smallest_index, smallest_value) when i < n do
    case elem(tuple, i) do
      x when x < smallest_value ->
        find_smallest_index(tuple, i + 1, tuple_size(tuple), i, x)
      _ ->
        find_smallest_index(tuple, i + 1, tuple_size(tuple), smallest_index, smallest_value)
    end
  end

  defp find_smallest_index(_tuple, _i, _n, smallest_index, _smallest_value) do
    smallest_index
  end

  def sort(tuple, result) when tuple_size(tuple) > 0 do
    smallest_index = find_smallest_index(tuple, 0, tuple_size(tuple), 0, elem(tuple, 0))
    smallest_value = elem(tuple, smallest_index)
    result = result ++ [smallest_value]
    tuple = Tuple.delete_at(tuple, smallest_index)
    sort(tuple, result)
  end

  def sort(_tuple, result) do
    result
  end
end

tuple = {2, 5, 6, 1, 9, 3, 8, 7}
IO.inspect(SelectionSort.sort(tuple, []))
