import { mount, createLocalVue, config, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import ElementUi from 'element-ui';

config.stubs.transition = false;

const localVue = createLocalVue();
localVue.use(ElementUi);

describe('El select', () => {
  it('Normal', () => {
    mount(HelloWorld, {
      localVue,
    });
  })

  it('Bug', () => {
    mount(HelloWorld, {
      localVue,
    });
  })

  it('Normal', () => {
    const wrap = shallowMount(HelloWorld, {
      localVue,
    });
  })

  it('Normal', () => {
    const wrap = mount(HelloWorld, {
      localVue,
    });
  })

  it('Normal', () => {
    mount(HelloWorld, {
      localVue,
    });
  })
})
