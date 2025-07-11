<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.ts";
  import Logo from "./Logo.svelte";
  import "../app.css";
</script>

<NavigationMenu.Root>
  <NavigationMenu.List>
    <div class="w-screen flex justify-between items-center p-3">
      <div>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/">
            <Logo />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </div>

      <div class="flex h-max align-middle">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/product">
            <div class="nav-menu-link">Produtos</div>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/order">
            <div class="nav-menu-link">Pedidos</div>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/coupon">
            <div class="nav-menu-link">Cupons</div>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </div>
    </div>
  </NavigationMenu.List>
</NavigationMenu.Root>

<style>
  .nav-menu-link {
    font-size: large;
    font-weight: bold;
  }
</style>
