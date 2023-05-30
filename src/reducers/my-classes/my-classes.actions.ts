import { createAsyncThunk } from '@reduxjs/toolkit';
import { MyClassesService } from '../../services/my-class.service';
import { MyClass } from '../../models/my-class.models';

export const fetchMyClasses = createAsyncThunk<MyClass[]>(
  'classes/fetchMyClasses',
  MyClassesService.getAll,
);