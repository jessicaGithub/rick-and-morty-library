"use client";

import { useState } from "react";
import { Text, Image } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/queries/character-queries";

import styles from "./page.module.css";

interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
}

export default function Characters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page, name: name },
  });
 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.filterBar}>
            <Text>Search by name:</Text>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className={styles.cards}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data?.characters?.results?.map((character: Character) => (
                <div key={character.id} className={styles.card}>
                    <Image src={character.image} alt={character.name} width={100} height={100} aspectRatio={1} />
                    <h2>{character.name}</h2>
                    <p>{character.species}</p>
                </div>
            ))}
        </div>
        <div className={styles.pagination}>
            {data?.characters?.info?.prev && (
                <button onClick={() => setPage(page - 1)}>Previous</button>
            )}
            {data?.characters?.info?.next && (
                <button onClick={() => setPage(page + 1)}>Next</button>
            )}
        </div>
      </main>
    </div>
  );
}
