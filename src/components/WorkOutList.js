import { useEffect, useState } from "react";
// import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import WorkOutCard from "./WorkOutCard";
import './style.css'

function WorkOutList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then((workouts) => {
        setWorkouts(workouts);
      });
  }, []);

  const categories = workouts.map((workout) => workout.category).filter(
      (category, index, categories) => categories.indexOf(category) === index
    )
    .sort();

  const displayedMovies = workouts.filter(
    (workout) => selectedCategory === "All" || workout.category === selectedCategory
  );

  return (
    <div className="container-1">
      <div className="container-2">
        <div className="me1">
        <CategoryFilter
          categories={["All", ...categories]}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        </div>
      </div>
      <section className="sec">
        {displayedMovies.map((workout) => (
          <WorkOutCard key={workout.id} workout={workout} />
        ))}
      </section>
    </div>

  );
}

// const Wrapper = styled.main`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 32px 16px;
//   display: grid;
//   gap: 16px;
//   grid-template-columns: 200px 1fr;
//   border: 2px solid red
// `;

// const Sidebar = styled.nav`
//   position: sticky;
//   top: 32px;
//   height: 25vh;
//   display: flex;
//   border: 2px solid red;
// `;

export default WorkOutList;
