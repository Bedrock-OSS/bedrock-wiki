<script setup lang="ts">
import useData from "../composables/data";
import NavLink from "./navigation/NavLink.vue";

const { site } = useData();
</script>

<template>
  <footer class="footer">
    <p>
      {{ site.title }}
      <small>
        by
        <a href="https://github.com/Bedrock-OSS" target="_blank" rel="noopener noreferrer">
          Bedrock OSS
        </a>
      </small>
    </p>
    <p>"Minecraft" is a trademark of Mojang AB.</p>
    <p>
      Bedrock OSS, {{ site.title }} and
      <a href="https://bedrock.dev" target="_blank" rel="noopener noreferrer">bedrock.dev</a>
      are not affiliated in any way with Microsoft or Mojang AB.
    </p>
    <ul>
      <li>
        <NavLink link="/privacy">Privacy Policy</NavLink>
      </li>
      <li>
        <NavLink link="/discord">Join our Discord</NavLink>
      </li>
      <li>
        <NavLink link="/contribute">Learn how to Contribute</NavLink>
      </li>
      <li>
        <NavLink link="https://github.com/Bedrock-OSS/bedrock-wiki">Visit our Repository</NavLink>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: var(--light-bg-color);
  border-top: var(--border);
  text-align: center;
  font-size: 0.8rem;
  padding: 1em;
  margin-top: auto;

  p {
    margin-block: 0.5em;

    &:first-child {
      font-size: 1rem;
      font-weight: 600;

      small {
        font-size: 0.9rem;
      }
    }
  }

  ul {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
  }

  @media not (max-width: 900px) {
    ul {
      display: flex;
      justify-content: center;
    }

    li:not(:first-child) {
      padding-left: 0.3rem;
    }

    li:not(:first-child)::before {
      content: "|";
      margin-right: 0.3rem;
    }
  }
}
</style>
