defmodule BinarySearch do
  def search(tuple, item) do
    high_index = tuple_size(tuple) - 1
    recur_search(tuple, item, 0, high_index)
  end

  defp recur_search(tuple, item, low_index, high_index) when low_index <= high_index do
    middle_index = div(low_index + high_index, 2)
    guess = elem(tuple, middle_index)

    cond do
      guess == item ->
        middle_index
      guess > item ->
        high_index = middle_index - 1
        recur_search(tuple, item, low_index, high_index)
      guess < item ->
        low_index = middle_index + 1
        recur_search(tuple, item, low_index, high_index)
    end
  end

  defp recur_search(_tuple, _item, _low_index, _high_index) do
    nil
  end
end

tuple = {1, 19, 34, 56, 105, 196, 211, 276, 345, 398, 401}
IO.puts(BinarySearch.search(tuple, 398)) # returns 9
