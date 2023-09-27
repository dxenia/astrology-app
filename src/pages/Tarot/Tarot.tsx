import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch.tsx';
import TarotCard from '../../components/TarotCard/TarotCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { TarotProps } from '../../types/TarotProps.ts';
import { Pagination } from '../../components/Pagination/Pagination.tsx';

import '../Tarot/Tarot.css';

export default function Tarot() {
  const [page, setPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState('All'); // Initialize with 'All'
  const itemsPerPage = 10;

  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/Get';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  const totalPages = Math.ceil((cards?.length || 0) / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtering function based on the selected criteria
  const filteredCards = cards?.filter((card) => {
    if (filterCriteria === 'All') {
      return true; // Show all cards
    }
    return card.type === filterCriteria; // Filter by type
  });

  const cardsToDisplay = filteredCards?.slice(startIndex, endIndex) || [];

  useEffect(() => {
    if (page < 1) {
      setPage(1);
    } else if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages, loading, error]);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  // Handler for changing the filter criteria
  const handleFilterChange = (criteria: string) => {
    setFilterCriteria(criteria);
    setPage(1); // Reset to the first page when changing the filter
  };

  return (
    <div>
      <h2>Tarot Cards</h2>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Major')}>
          Major Arcana
        </button>
        <button onClick={() => handleFilterChange('Minor')}>
          Minor Arcana
        </button>
        {/* Add more buttons for other filter criteria */}
      </div>

      <div className="card__list">
        {cardsToDisplay.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={setPage}
      />
    </div>
  );
}
