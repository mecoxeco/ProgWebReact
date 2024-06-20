"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CardSection from "@/components/card-section/Card-Section";
import { PokemonData } from "@/interfaces";

const Evolucoes = () => {
  const searchParams = useSearchParams();
  const evolucao = searchParams.get('evolucao');
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    if (evolucao) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data => setPokemonData(data));
    }
  }, [evolucao]);

  return (
    <div>
      {pokemonData ? (
        <CardSection title={evolucao as string}>
          <img src={pokemonData.sprites.front_default} alt={evolucao as string} />
        </CardSection>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Evolucoes;
