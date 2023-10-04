import { PaginationProps } from '../../types/PaginationProps';
import Button from '../Button/Button';

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
          <Button onClick={() => handlePagination(page - 1)} url="#tarots">
            👈🏼 Back
          </Button>
        )}
        {page < totalPages && (
          <Button onClick={() => handlePagination(page + 1)} url="#tarots">
            Forward 👉🏼
          </Button>
        )}
      </div>
    </div>
  );
};
