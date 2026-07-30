import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
}

interface BlogState {
  posts: BlogPost[];
  selectedCategory: string | null;
  selectedTag: string | null;
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: BlogState = {
  posts: [
    {
      id: "1",
      title: "The Future of Web Design",
      slug: "future-of-web-design",
      excerpt: "Exploring emerging trends and technologies shaping web design",
      content: "...",
      author: "John Doe",
      category: "design",
      tags: ["design", "trends", "web"],
      image: "/blog/future-web-design.jpg",
      published: true,
      publishedAt: "2024-07-15",
      updatedAt: "2024-07-15",
      readingTime: 5,
    },
  ],
  selectedCategory: null,
  selectedTag: null,
  searchQuery: "",
  currentPage: 1,
  itemsPerPage: 12,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<BlogPost>) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
    updatePost: (state, action: PayloadAction<BlogPost>) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setSelectedTag: (state, action: PayloadAction<string | null>) => {
      state.selectedTag = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setPosts,
  addPost,
  removePost,
  updatePost,
  setSelectedCategory,
  setSelectedTag,
  setSearchQuery,
  setCurrentPage,
} = blogSlice.actions;
export default blogSlice.reducer;
