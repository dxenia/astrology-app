import useFetch from '../../hooks/useFetch.tsx';
import TarotCard from '../../components/TarotCard/TarotCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { TarotProps } from '../../types/TarotProps.ts';
import { useState, useEffect } from 'react';
import { Pagination } from '../../components/Pagination/Pagination.tsx';

import '../Tarot/Tarot.css';

export default function Tarot() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/Get';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  const totalPages = Math.ceil((cards?.length || 0) / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToDisplay = cards?.slice(startIndex, endIndex) || [];

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

  return (
    <div className="page">
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={setPage}
      />
      <h2>Tarot Cards</h2>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="card__list">
        {cardsToDisplay.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
