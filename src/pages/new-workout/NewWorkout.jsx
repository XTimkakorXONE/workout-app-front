import { Layout } from "../../layout/Layout";
import { SelectExercises } from "./SelectExercises";
import Field from "../../ui/field/Field";
import Loader from "../../ui/Loader";
import Button from "../../ui/button/Button";
import Alert from "../../ui/alert/Alert";
import { Link } from "react-router-dom";
import { useNewWorkout } from "./useNewWorkout";

const NewWorkout = () => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    isSuccess,
    error,
    isLoading,
    onSubmit,
  } = useNewWorkout();

  return (
    <>
      <Layout
        bgImage="images/new_workout.jpg"
        heading="Create new workout"
        backLink="/"
      />

      <div className="wrapper-inner-page">
        {error && <Alert type="error" text={error} />}
        {isSuccess && <Alert text="Workout created successfully" />}
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

          <Link to="/new-exercise" className="dark-link">
            Add new exercise
          </Link>

          <SelectExercises control={control} />

          {errors?.iconPath && (
            <div className="error">{errors?.iconPath?.message}</div>
          )}

          <Button>Create</Button>
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
