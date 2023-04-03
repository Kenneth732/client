import { useState, useEffect } from "react";
import styled from "styled-components";

function WorkoutSummary({ workoutId }) {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    async function fetchWorkoutSummary() {
      const response = await fetch(`/workouts/${workoutId}/summary`);
      const data = await response.json();
      setWorkout(data);
    }
    fetchWorkoutSummary();
  }, [workoutId]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Title>{workout.title}</Title>
      <Summary>{workout.summary}</Summary>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
`;

const Summary = styled.p`
  margin: 0;
`;

export default WorkoutSummary;
