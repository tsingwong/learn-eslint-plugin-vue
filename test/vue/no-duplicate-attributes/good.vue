<template>
    <MyComponent :foo="abc" />
    <MyComponent foo="abc" />
    <MyComponent :foo.a="abc" />
    <MyComponent class="abc" />
    <MyComponent class="abc" :class="def" />
</template>
