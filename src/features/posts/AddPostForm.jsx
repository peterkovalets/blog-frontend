import { useCallback, useMemo, useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import { useForm } from 'react-hook-form';
import 'easymde/dist/easymde.min.css';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

function AddPostForm() {
  const { register, handleSubmit, formState } = useForm();
  const [content, setContent] = useState('');
  const { errors } = formState;

  function onSubmit(data) {
    const newData = {
      ...data,
      tags: data.tags ? data.tags.split(',') : [],
      content,
    };
    console.log(newData);
  }

  const onChange = useCallback((value) => {
    setContent(value);
  }, []);

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  return (
    <Form size="full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <FormRow error={errors?.title?.message}>
          <Input
            className="w-full text-xl"
            placeholder="Article title..."
            {...register('title', {
              required: 'This field is required',
            })}
          />
        </FormRow>

        <FormRow error={errors?.tags?.message}>
          <Input
            className="w-full text-lg"
            placeholder="Tags (separated by comma) (optional)"
            {...register('tags', {
              pattern: {
                value: /^(\w+)(,\w+)*$/,
                message: 'Tags should be separated by comma',
              },
            })}
          />
        </FormRow>

        <SimpleMDE
          className="text-left text-lg"
          placeholder="Article text..."
          options={autofocusNoSpellcheckerOptions}
          value={content}
          onChange={onChange}
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button onClick={() => setContent('')} variant="outline" type="reset">
          Cancel
        </Button>
        <Button variant="primary">Publish</Button>
      </div>
    </Form>
  );
}

export default AddPostForm;
