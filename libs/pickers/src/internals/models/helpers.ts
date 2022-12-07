export type DefaultizedProps<P extends {}, RequiredPropsList extends keyof P, AdditionalProps extends {} = {}> = Omit<
  P,
  RequiredPropsList | keyof AdditionalProps
> &
  Required<Pick<P, RequiredPropsList>> &
  AdditionalProps;
