import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import clsx from "clsx";

import ExerciseService from "../../services/exercise/exercise.service";
import { Layout } from "../../layout/Layout";
import styles from "./NewExercise.module.scss";
import { getIconPath } from "./icon-path.util";

import Field from "../../ui/field/Field";
import Loader from "../../ui/Loader";
import Button from "../../ui/button/Button";
import Alert from "../../ui/alert/Alert";

const data = ["chest", "shoulders", "biceps", "legs", "hit", "back"];

const NewExercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });

  const { isSuccess, error, isLoading, mutate } = useMutation(
    ["create exercise"],
    (body) => ExerciseService.create(body),
    {
      onSuccess: () => {
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <Layout
        bgImage="images/new_exercise.jpg"
        heading="Create new exercise"
        backLink="/"
      />

      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isSuccess && <Alert text="Exercise created" />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.name?.message}
            name="name"
            register={register}
            options={{
              required: "name is required",
            }}
            type="text"
            placeholder="Enter name"
          />
          <Field
            error={errors?.times?.message}
            name="times"
            register={register}
            options={{
              valueAsNumber: true,
              validate: (value) => value > 0 || "Times must be number",
              required: "Times is required",
            }}
            type="times"
            placeholder="Enter times"
          />

          <Controller
            name="iconPath"
            control={control}
            render={({ field: { value, onChange } }) => (
              <div className={styles.images}>
                {data.map((name) => (
                  <img
                    key={`ex img ${name}`}
                    src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
                      name
                    )}`}
                    alt={name}
                    className={clsx({
                      [styles.active]: value === getIconPath(name),
                    })}
                    onClick={() => onChange(getIconPath(name))}
                    draggable={false}
                    height="55"
                  />
                ))}
              </div>
            )}
          />

          {errors?.iconPath && (
            <div className="error">{errors?.iconPath?.message}</div>
          )}

          <Button>Create</Button>
        </form>
      </div>
    </>
  );
};

export default NewExercise;
