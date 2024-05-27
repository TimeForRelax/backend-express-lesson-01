import { Resolutions, VideosDataType } from '../types/videosType';

export const validateBody = (body: unknown): { message: string; field: string }[] => {
  const validatedBody = body as Partial<VideosDataType>;
  const errors = [];

  if (!validatedBody.title) {
    errors.push({ message: 'Title is required', field: 'title' });
  } else if (typeof validatedBody.title !== 'string') {
    errors.push({ message: 'Title must be a string', field: 'title' });
  } else if (validatedBody.title.length > 40) {
    errors.push({ message: 'Title must be no longer than 40 characters', field: 'title' });
  }

  if (!validatedBody.author) {
    errors.push({ message: 'Author is required', field: 'author' });
  } else if (typeof validatedBody.author !== 'string') {
    errors.push({ message: 'Author must be a string', field: 'author' });
  } else if (validatedBody.author.length > 20) {
    errors.push({ message: 'Author name must be no longer than 20 characters', field: 'author' });
  }

  if (validatedBody.availableResolutions) {
    const validResolutionsValues = Object.values(Resolutions);

    const invalidResolutions = validatedBody.availableResolutions.filter(
      (res: Resolutions) => !validResolutionsValues.includes(res),
    );

    if (invalidResolutions.length > 0) {
      errors.push({ message: 'Invalid resolutions provided', field: 'availableResolutions' });
    }
  }

  if (validatedBody.id) {
    if (!Number.isInteger(validatedBody.id)) {
      errors.push({ message: 'ID must be an integer', field: 'id' });
    }
  }

  if (validatedBody.canBeDownloaded) {
    if (typeof validatedBody.canBeDownloaded !== 'boolean') {
      errors.push({ message: 'Can be downloaded must be a boolean', field: 'canBeDownloaded' });
    }
  }

  if (validatedBody.minAgeRestriction) {
    if (typeof validatedBody.minAgeRestriction !== 'number' || !Number.isInteger(validatedBody.minAgeRestriction)) {
      errors.push({ message: 'Min age restriction must be an integer', field: 'minAgeRestriction' });
    } else if (validatedBody.minAgeRestriction < 1 || validatedBody.minAgeRestriction > 18) {
      errors.push({ message: 'Min age restriction must be between 1 and 18', field: 'minAgeRestriction' });
    }
  }

  if (validatedBody.publicationDate) {
    if (
      typeof validatedBody.publicationDate !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(validatedBody.publicationDate)
    ) {
      errors.push({ message: 'Publication date must be a string', field: 'publicationDate' });
    }
  }

  return errors;
};
