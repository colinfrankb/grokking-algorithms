defmodule QuickSort do
  def sort([pivot | tail]) when length(tail) > 1 do
    {less, greater} = partition(tail, pivot, [], [])
    sort(less) ++ [pivot] ++ sort(greater)
  end

  def sort(list) do
    list
  end

  def partition([head | tail], pivot, less, greater) do
    case head do
      x when x <= pivot ->
        partition(tail, pivot, less ++ [head], greater)
      _ ->
        partition(tail, pivot, less, greater ++ [head])
    end
  end

  def partition([], _pivot, less, greater) do
    {less, greater}
  end
end


list = [2, 5, 6, 1, 9, 3, 8, 7]
IO.inspect(QuickSort.sort(list))

# list = [2, 5, 6, 1, 9, 3, 8, 7]
# IO.inspect(QuickSort.partition(list, 5, [], []))
