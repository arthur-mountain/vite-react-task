import type { AppDispatch, RootState } from "./store";
import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux";

export const useDispatch = _useDispatch.withTypes<AppDispatch>();
export const useSelector = _useSelector.withTypes<RootState>();
