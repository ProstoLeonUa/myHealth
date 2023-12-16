<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col cols="6">
      <v-form>
        <v-card>
          <v-card-title class="text-center">
            Авторизація
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Логін"
              variant="outlined"
            />
            <v-text-field
              label="Пароль"
              variant="outlined"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn
              variant="outlined"
              color="green"
            >
              Увійти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>