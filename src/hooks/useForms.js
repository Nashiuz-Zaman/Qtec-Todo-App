// react
import { useCallback } from "react";

// redux
import { useDispatch } from "react-redux";
import {
  setCreateFormOpen,
  setEditFormOpen,
} from "../features/forms/formsSlice";
import { setOpen } from "../features/backdrop/backdropSlice";

const useForms = () => {
  const dispatch = useDispatch();

  const openCreateForm = useCallback(() => {
    dispatch(setCreateFormOpen(true));
    dispatch(setOpen(true));
  }, [dispatch]);

  const closeCreateForm = useCallback(() => {
    dispatch(setCreateFormOpen(false));
    dispatch(setOpen(false));
  }, [dispatch]);

  const openEditForm = useCallback(() => {
    dispatch(setEditFormOpen(true));
    dispatch(setOpen(true));
  }, [dispatch]);

  const closeEditForm = useCallback(() => {
    dispatch(setEditFormOpen(false));
    dispatch(setOpen(false));
  }, [dispatch]);

  return { openCreateForm, closeCreateForm, openEditForm, closeEditForm };
};

export default useForms;
