import Button from '../Button/Button';
import { PaginationProps } from './Pagination.types';

import './Pagination.css';

export const Pagination = ({
  page,
  totalPages,
  handlePagination,
}: PaginationProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="pagination">
        {page > 1 && (
          <Button
            onClick={() => {
              handlePagination(page - 1);
              scrollToTop();
            }}
          >
            👈🏼 Back
          </Button>
        )}
        {page < totalPages && (
          <Button
            onClick={() => {
              handlePagination(page + 1);
              scrollToTop();
            }}
          >
            Forward 👉🏼
          </Button>
        )}
      </div>
    </div>
  );
};
