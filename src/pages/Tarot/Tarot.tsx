import { useEffect, useState, useMemo } from 'react';
import useFetch from '../../hooks/useFetch.tsx';
import TarotCard from '../../components/TarotCard/TarotCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { TarotProps } from '../../types/TarotProps.ts';
import { Pagination } from '../../components/Pagination/Pagination.tsx';

import '../Tarot/Tarot.css';

export default function Tarot() {
  const [page, setPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState('All');
  const itemsPerPage = 10;

  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/Get';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  const filteredCards = useMemo(() => {
    if (filterCriteria === 'All') {
      return cards;
    }
    return cards?.filter((card) => card.type === filterCriteria);
  }, [cards, filterCriteria]);

  const totalFilteredPages = useMemo(() => {
    return Math.ceil((filteredCards?.length || 0) / itemsPerPage);
  }, [filteredCards]);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToDisplay = useMemo(() => {
    return filteredCards?.slice(startIndex, endIndex) || [];
  }, [filteredCards, startIndex, endIndex]);

  useEffect(() => {
    if (page < 1) {
      setPage(1);
    } else if (page > totalFilteredPages) {
      setPage(totalFilteredPages);
    }
  }, [page, totalFilteredPages, loading, error]);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  const handleFilterChange = (criteria: string) => {
    setFilterCriteria(criteria);
    setPage(1);
  };

  return (
    <div>
      <h2>Tarot Cards</h2>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Major')}>
          Major Arcana
        </button>
        <button onClick={() => handleFilterChange('Minor')}>
          Minor Arcana
        </button>
      </div>

      <div className="card__list">
        {cardsToDisplay.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalFilteredPages}
        handlePagination={setPage}
      />
    </div>
  );
}
