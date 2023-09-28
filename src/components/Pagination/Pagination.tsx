import { PaginationProps } from '../../types/PaginationProps';

import './Pagination.css';

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div>
      <div className="pagination">
        {page > 1 && (
          <button onClick={() => handlePagination(page - 1)} type="button">
            Back
          </button>
        )}

        {page < totalPages && (
          <button onClick={() => handlePagination(page + 1)} type="button">
            Forward
          </button>
        )}
      </div>
    </div>
  );
};
