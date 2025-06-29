// https://vitepress.dev/guide/custom-theme
import "./styles/index.scss";
import { Theme } from "vitepress";
import { Component } from "vue";

import Layout from "./components/Layout.vue";

import Button from "./components/content/Button.vue";
import Card from "./components/content/Card.vue";
import CardGrid from "./components/content/CardGrid.vue";
import CodeHeader from "./components/content/CodeHeader.vue";
import FolderView from "./components/content/FolderView.vue";
import Label from "./components/content/Label.vue";
import MolangGraph from "./components/content/MolangGraph.vue";
import Spoiler from "./components/content/Spoiler.vue";
import Table from "./components/content/Table.vue";
import Tag from "./components/content/Tag.vue";
import WikiImage from "./components/content/WikiImage.vue";
import YouTubeEmbed from "./components/content/YouTubeEmbed.vue";

const contentComponents: Record<string, Component> = {
  Button,
  Card,
  CardGrid,
  CodeHeader,
  FolderView,
  Label,
  MolangGraph,
  Spoiler,
  Table,
  Tag,
  WikiImage,
  YouTubeEmbed,
};

export default {
  Layout,
  enhanceApp({ app }) {
    for (const name in contentComponents) {
      app.component(name, contentComponents[name]);
    }
  },
} satisfies Theme;

export * from "./types";
