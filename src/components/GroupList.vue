<template>
  <div class="group-list">
    <div class="group-list__form">
      <input class="group-list__input" type="text" placeholder="Type a new group name" v-model="newGroupName">
      <button class="group-list__submit" type="submit" @click="addGroup()">Add group</button>
    </div>
    <div class="group-list__list">
      <div class="group-list__item group" v-for="group in groups" :key="group.id">
        <router-link class="group__name" :to="'/group/'+group.id">{{ group.name }}</router-link>
        <span class="group__remove" @click="removeGroup(group.id)">&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupList",
  data() {
    return {
      currentId: 2,
      newGroupName: "",
      groups: [
        {
          "id": 1,
          "name": "Group 1"
        },
        {
          "id": 2,
          "name": "Group 2"
        }
      ]
    }
  },
  methods: {
    addGroup() {
      if (this.newGroupName.trim().length) {
        this.currentId += 1;
        this.groups.push({
          id: this.currentId,
          name: this.newGroupName
        });
        this.newGroupName = '';
      }
    },
    removeGroup(id) {
      this.groups.splice(this.groups.findIndex(group => group.id === id), 1);
    }
  }
}
</script>

<style lang="scss">

  .group-list {

    width: 400px;
    margin-left: auto;
    margin-right: auto;

    &__form {
      display: flex;
      align-items: center;
    }

    &__input {
      width: 100%;
      height: 30px;
      border: 1px solid #E5E7E9;
      border-radius: 8px;
      padding: 0 15px;
    }

    &__submit {
      flex-shrink: 0;
      background: #626567;
      color: #F8F9F9;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      border-radius: 8px;
      border: none;
      margin-left: 15px;
      cursor: pointer;
    }

    &__list {
      margin-top: 30px;
    }

    &__item {

      &:not(:last-child) {
        margin-bottom: 15px;
      }

    }

  }

  .group {

    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 15px;
    background: #F2F3F4;
    border: 2px solid #E5E7E9;
    border-radius: 8px;

    &__name {
      display: flex;
      color: #626567;
      text-decoration: none !important;
    }

    &__remove {
      cursor: pointer;
      flex-shrink: 0;
      margin-left: 20px;
    }

  }

</style>