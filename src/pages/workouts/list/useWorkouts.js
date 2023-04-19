import { useMutation, useQuery } from "@tanstack/react-query";
import WorkoutService from "../../../services/workout/workout.service";
import WorkoutLogService from "../../../services/workout/workout-log.service";
import { useNavigate } from "react-router-dom";

export const useWorkouts = () => {
  const { data, isSuccess } = useQuery(
    ["get workouts"],
    () => WorkoutService.getAll(),
    {
      select: ({ data }) => data,
    }
  );

  const navigate = useNavigate();

  const {
    mutate,
    isLoading,
    isSuccess: isSuccessMutate,
    error,
  } = useMutation(["Create workout log"], () => WorkoutLogService.create(), {
    onSuccess({ data }) {
      navigate(`/workout/${data._id}`);
    },
  });

  return {
    data,
    isSuccess,
    mutate,
    isLoading,
    isSuccessMutate,
    error,
  };
};
