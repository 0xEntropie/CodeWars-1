def include?(word)
    word = word.upcase.gsub(/QU/, 'Q')
    chars = word.chars
    board.each_index do |row|
      board.each_index do |col|
        return true if check?(chars, board, row, col)
      end
    end
    false
  end

  def check?(chars, board, row, col)
    return false unless within_bounds?(row, col)
    return false unless chars.first == board[row][col]
    board = board.transpose.transpose # deep clone
    remain = chars[1..-1]
    if remain.empty?
      true
    else
      board[row][col] = '-'
      check_in_all_directions?(remain, board, row, col)
    end
  end

  def check_in_all_directions?(remain, board, row, col)
      check?(remain, board, row    , col + 1) || # right
      check?(remain, board, row    , col - 1) || # left
      check?(remain, board, row + 1, col    ) || # up
      check?(remain, board, row - 1, col    ) || # down
      check?(remain, board, row - 1, col - 1) || # down right
      check?(remain, board, row - 1, col + 1) || # down left
      check?(remain, board, row + 1, col - 1) || # up right
      check?(remain, board, row + 1, col + 1)    # up left
  end

  def within_bounds?(row, col)
    row.between?(0,3) && col.between?(0,3)
  end
end

# TODO tests