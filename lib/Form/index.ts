import Root from './Form.svelte';
import Field from './Field.svelte';

const Form = Root as (typeof Root & {
    Field: typeof Field
});

Form.Field = Field;

export default Form;

export {
    Field,
    Root as Form
};