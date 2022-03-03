import UiLink from '@/components/atoms/UiLink/UiLink.vue';
import UiIcon from '@/components/atoms/UiIcon/UiIcon.vue';

export default {
  title: 'Atoms/Link',
  component: UiLink,
  args: {
    content: 'Back',
    href: '#',
    disabled: false,
    modifiers: [],
  },
  argTypes: {
    content: { control: 'text' },
    modifiers: {
      control: {
        type: 'multi-select',
      },
      options: [
        'ui-link--small',
        'ui-link--is-disabled',
        'ui-link--has-icon',
        'ui-link--secondary',
      ],
      table: {
        category: 'HTML attributes',
      },
    },
  },
  parameters: {
    cssprops: {
      'link-color': {
        value: 'var(--color-text-action-primary)',
        control: 'text',
        description: '',
      },
      'link-text-decoration': {
        value: 'none',
        control: 'text',
        description: '',
      },
      'link-hover-color': {
        value: 'var(--color-text-action-primary-hover)',
        control: 'text',
        description: '',
      },
      'link-icon-hover-color': {
        value: 'var(--color-icon-primary-hover)',
        control: 'text',
        description: '',
      },
      'link-active-color': {
        value: 'var(--color-text-action-primary-active)',
        control: 'text',
        description: '',
      },
      'link-icon-active-color': {
        value: 'var(--color-text-action-primary-active)',
        control: 'text',
        description: '',
      },
      'link-icon-size': {
        value: 'var(--space-24)',
        control: 'text',
        description: '',
      },
      'link-icon-margin': {
        value: '0 0 0 var(--space-4)',
        control: 'text',
        description: '',
      },
      'link-icon-color': {
        value: 'var(--color-icon-primary)',
        control: 'text',
        description: '',
      },
    },
  },
};

const Template = (args) => ({
  components: { UiLink },
  setup() { return { ...args }; },
  template: `<UiLink
    :href="href"
    :class="modifiers"
    :disabled="disabled"
    @click="onClick"
  >
    {{content}}  
  </UiLink>`,
});

export const Large = Template.bind({});

export const LargeWithIcon = (args) => ({
  components: { UiLink, UiIcon },
  setup() { return { ...args }; },
  template: `<UiLink
    :href="href"
    :class="modifiers"
    :disabled="disabled"
    @click="onClick"
  >
    <UiIcon
      icon="plus-circled-filled"
      class="ui-link__icon"
    />
    {{content}}  
  </UiLink>`,
});
LargeWithIcon.args = {
  modifiers: ['ui-link--has-icon'],
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  modifiers: ['ui-link--secondary'],
};

export const LargeSecondaryWithIcon = LargeWithIcon.bind({});
LargeSecondaryWithIcon.args = {
  modifiers: ['ui-link--has-icon', 'ui-link--secondary'],
};

// todo: add LargeOnDark
export const LargeOnDark = () => ({
  template: 'Oops! Not found!',
});

export const Small = Large.bind({});
Small.args = {
  modifiers: ['ui-link--small'],
};

export const SmallWithIcon = LargeWithIcon.bind({});
SmallWithIcon.args = {
  modifiers: ['ui-link--has-icon', 'ui-link--small'],
};

export const SmallSecondary = Large.bind({});
SmallSecondary.args = {
  modifiers: ['ui-link--small', 'ui-link--secondary'],
};

export const SmallSecondaryWithIcon = LargeWithIcon.bind({});
SmallSecondaryWithIcon.args = {
  modifiers: ['ui-link--has-icon', 'ui-link--small', 'ui-link--secondary'],
};

export const LargeAsRouterLink = (args) => ({
  components: { UiLink },
  setup() { return { ...args }; },
  template: `<UiLink
    :to="to"
    :class="modifiers"
    :disabled="disabled"
  >
    {{content}}  
  </UiLink>`,
});
LargeAsRouterLink.args = {
  to: '/back',
};
LargeAsRouterLink.argTypes = {
  to: { control: 'text' },
};

export const LargeAsLink = (args) => ({
  components: { UiLink },
  setup() { return { ...args }; },
  template: `<UiLink
    :href="href"
    :class="modifiers"
    :disabled="disabled"
  >
    {{content}}  
  </UiLink>`,
});
LargeAsLink.args = {
  href: 'https://infermedica.com/',
};
LargeAsLink.argTypes = {
  href: { control: 'text' },
};
