// https://vitepress.dev/guide/custom-theme
import "./client/styles/index.scss";
import { Theme } from "vitepress";
import { Component } from "vue";

import Layout from "./client/components/Layout.vue";

import Button from "./client/components/content/Button.vue";
import Card from "./client/components/content/Card.vue";
import CardGrid from "./client/components/content/CardGrid.vue";
import CodeHeader from "./client/components/content/CodeHeader.vue";
import FolderView from "./client/components/content/FolderView.vue";
import Label from "./client/components/content/Label.vue";
import MolangGraph from "./client/components/content/MolangGraph.vue";
import Spoiler from "./client/components/content/Spoiler.vue";
import Table from "./client/components/content/Table.vue";
import Tag from "./client/components/content/Tag.vue";
import UnicodeCopyButton from "./client/components/content/UnicodeCopyButton.vue";
import WikiImage from "./client/components/content/WikiImage.vue";
import YouTubeEmbed from "./client/components/content/YouTubeEmbed.vue";

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
  UnicodeCopyButton,
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
