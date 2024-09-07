<script lang="ts">
  import { supabase } from "./lib/supabase";
  import type { User } from "./types/users";
  let users: User[] = [];

  const loadUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    console.log(data);
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      users = data;
    }
  };

  loadUsers();
</script>

<h1>User List</h1>

{#if users.length > 0}
  <ul>
    {#each users as user}
      <li>{user.name}</li>
    {/each}
  </ul>
{:else}
  <p>No users found</p>
{/if}
