<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <!-- Your content here -->
        <v-row>
          <v-col cols="12" class="pa-0">
            <div
              class="pa-6"
              :style="{ backgroundColor }"
              style="min-height: calc(150vh - 64px)"
            >
              <!-- Content -->
              <div>
                <h1
                  class="text-h1 text-center mt-14"
                  :style="{ fontFamily: selectedFontFamily, color: textColor }"
                >
                  Lorem ipsum dolor
                </h1>
                <p
                  class="text-h6 text-center mt-14"
                  :style="{ fontFamily: selectedFontFamily, color: textColor }"
                >
                  This is some text whose color will change based on the color
                  pickers.
                </p>
                <!-- Add more text or content here as needed -->
                <!-- For example: -->
                <p
                  class="text-h9 text-center mt-14"
                  :style="{ fontFamily: selectedFontFamily, color: textColor }"
                >
                  More text here...
                </p>
              </div>

              <!-- Add more shapes here -->
              <v-col offset="9" cols="3">
                <v-row class="justify-center">
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 100% 0% / 0% 100% 0% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 100% 0% 100% 0% / 78% 29% 71% 22%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 0% 100% / 19% 76% 24% 81%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 0% 100% / 100% 0% 100% 0%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                  ></div>
                </v-row>
                <v-row class="justify-center">
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 100% 0% / 0% 100% 0% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 0;
                      height: 0;
                      border-left: 0px solid transparent; /* Half of desired width */
                      border-right: 120px solid transparent; /* Half of desired width */
                      border-bottom: 120px solid;
                    "
                    :style="{ borderBottomColor: shapesGroup.shapeGroupThree }"
                  ></div
                ></v-row>
                <v-row class="justify-center">
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 0% 100% / 0% 0% 100% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 0% 100% / 0% 0% 100% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 0% 100% 100% 0% / 0% 0% 100% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupFour }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div
                ></v-row>
                <v-row class="justify-center">
                  <div
                    style="
                      width: 0;
                      height: 0;
                      border-left: 120px solid transparent; /* Half of desired width */
                      border-right: 0px solid transparent; /* Half of desired width */
                      border-bottom: 120px solid;
                    "
                    :style="{ borderBottomColor: shapesGroup.shapeGroupTwo }"
                  ></div>
                  <div
                    style="
                      width: 0;
                      height: 0;
                      border-left: 0px solid transparent; /* Half of desired width */
                      border-right: 120px solid transparent; /* Half of desired width */
                      border-bottom: 120px solid;
                    "
                    :style="{ borderBottomColor: shapesGroup.shapeGroupThree }"
                  ></div>
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 0;
                      height: 0;
                      border-left: 0px solid transparent; /* Half of desired width */
                      border-right: 120px solid transparent; /* Half of desired width */
                      border-bottom: 120px solid;
                    "
                    :style="{ borderBottomColor: shapesGroup.shapeGroupTwo }"
                  ></div
                ></v-row>
                <v-row class="justify-center">
                  <div
                    style="
                      width: 120px;
                      height: 120px;
                      border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%;
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div>
                  <div
                    style="
                      width: 0px;
                      height: 0px;
                      border-style: solid;
                      border-width: 120px 120px 0 0;
                      border-color: transparent transparent transparent
                        transparent;
                      transform: rotate(0deg);
                    "
                    :style="{
                      borderBottomColor: shapesGroup.shapeGroupTwo,
                      borderTopColor: shapesGroup.shapeGroupTwo,
                    }"
                  ></div>
                  <div
                    style="
                      width: 120px; /* Adjust width as needed */
                      height: 120px; /* Adjust height as needed */
                      border-radius: 100px 0 0 100px; /* Adjust border-radius to create a half pill shape from left to right */
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupThree }"
                  ></div>
                  <div
                    style="
                      width: 120px; /* Adjust width as needed */
                      height: 120px; /* Adjust height as needed */
                      border-radius: 0px 100px 100px 0px; /* Adjust border-radius to create a half pill shape from left to right */
                    "
                    :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                  ></div
                ></v-row>
              </v-col>

              <v-row class="mt-10">
                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                ></div>
                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                ></div>

                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupThree }"
                ></div>
                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                ></div>

                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupOne }"
                ></div>
                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupThree }"
                ></div>

                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupFour }"
                ></div>
                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 100% 100% 0% 0%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                ></div>

                <div
                  style="
                    width: 300px;
                    height: 300px;
                    border-radius: 100% 0% 100% 0% / 0% 0% 100% 100%;
                  "
                  :style="{ backgroundColor: shapesGroup.shapeGroupTwo }"
                ></div>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Bottom Bar with Controls -->
    <div app class="bottom-bar pb-3 pt-3">
      <v-row align="center justify-center">
        <v-col cols="2">
          <label for="background-color-picker">Background Color:</label>
          <input
            type="color"
            id="background-color-picker"
            v-model="backgroundColor"
            class="mr-3"
          />
        </v-col>
        <v-col cols="2">
          <label for="text-color-picker">Text Color:</label>
          <input
            type="color"
            id="text-color-picker"
            v-model="textColor"
            class="mr-3"
          />
        </v-col>
        <v-col cols="2">
          <label for="shape-color-picker">Shape Color:</label>
          <input
            type="color"
            id="shape-color-picker"
            v-model="shapeColor"
            class="mr-3"
          />
        </v-col>
        <v-col cols="2">
          <v-autocomplete
            dense
            variant="solo"
            v-model="selectedFontFamily"
            hide-details="auto"
            :items="fontFamilies"
            label="Select Font Family"
            item-value="font"
            item-text="font"
          ></v-autocomplete>
        </v-col>
        <v-col cols="1">
          <button density="compact" @click="toggleSpan">
            Change shapes style
          </button></v-col
        >
        <span v-if="showBannerPickers">
          <v-banner
            class="align-center"
            color="deep-purple-accent-4"
            lines="one"
          >
            <v-banner-text style="width: 280px">
              <input
                type="color"
                id="text-color-picker"
                v-model="shapesGroup.shapeGroupOne"
                class="mr-3"
                label="Shape one"
              />
              <input
                type="color"
                id="text-color-picker"
                v-model="shapesGroup.shapeGroupTwo"
                class="mr-3"
              />
              <input
                type="color"
                id="text-color-picker"
                v-model="shapesGroup.shapeGroupThree"
                class="mr-3"
              />
            </v-banner-text>

            <v-icon @click="hideSpan()">mdi-close</v-icon>
          </v-banner>
        </span>
        <!-- Other controls for text, shapes, backgrounds -->
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: "#000", // Initial background color
      textColor: "#fff", // Initial text color
      shapesGroup: {
        shapeGroupOne: "#1793fe",
        shapeGroupTwo: "#feaf00",
        shapeGroupThree: "#ec452f",
        shapeGroupFour: "#feeb00",
      },
      showBannerPickers: false,
      shapeColor: "#ff0000", // Initial shape color
      selectedFontFamily: "Roboto", // Initial font family for H1
      fontFamilies: ["Roboto", "'IBM Plex Mono', monospace"], // Font families list
    };
  },
  methods: {
    toggleSpan() {
      this.showBannerPickers = !this.showBannerPickers;
    },
    hideSpan() {
      this.showBannerPickers = false;
    },
  },
};
</script>

<style>
/* Additional styling can be added here if needed */
.shapes-container {
  display: flex;
  justify-content: center;
}

.shape {
  width: 100px;
  height: 100px;
  margin: 10px;
}

.bottom-bar {
  background: white;
  position: fixed !important;
  bottom: 0;
  width: 100%;
}
</style>
