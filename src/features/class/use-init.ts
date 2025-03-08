import { useEffect } from "react";
import { ClassesServices } from "@/services";
import { useDispatch, useSelector } from "@/stores";
import { initClass } from "./reducer/slice";

const useInit = () => {
  const dispatch = useDispatch();
  const classTitle = useSelector(
    (state) => `${state.class.classInfo.class} ${state.class.classInfo.course}`,
  );

  useEffect(() => {
    (async () => {
      try {
        const data = await ClassesServices.getClass("");
        dispatch(initClass(data));
      } catch {
        dispatch(initClass());
      }
    })();
  }, [dispatch]);

  return classTitle;
};

export { useInit };
