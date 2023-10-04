import { PaginationProps } from '../../types/PaginationProps';
import { OnClickButton } from '../Button/Button';

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
          <a href="#tarots">
            <OnClickButton onClick={() => handlePagination(page - 1)}>
              👈🏼 Back
            </OnClickButton>
          </a>
        )}

        {page < totalPages && (
          <a href="#tarots">
            <OnClickButton onClick={() => handlePagination(page + 1)}>
              Forward 👉🏼
            </OnClickButton>
          </a>
        )}
      </div>
    </div>
  );
};
