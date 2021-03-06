/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BlockchainInterface extends utils.Interface {
  contractName: "Blockchain";
  functions: {
    "balances(uint256)": FunctionFragment;
    "blocksize()": FunctionFragment;
    "getAccountBalances(uint256)": FunctionFragment;
    "init(uint256[],uint256[3][],uint256)": FunctionFragment;
    "kill()": FunctionFragment;
    "transactions(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "blocksize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAccountBalances",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      BigNumberish[],
      [BigNumberish, BigNumberish, BigNumberish][],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "kill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blocksize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccountBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Blockchain extends BaseContract {
  contractName: "Blockchain";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BlockchainInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balances(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    blocksize(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAccountBalances(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    init(
      _balances: BigNumberish[],
      _transactions: [BigNumberish, BigNumberish, BigNumberish][],
      _blocksize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transactions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  blocksize(overrides?: CallOverrides): Promise<BigNumber>;

  getAccountBalances(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  init(
    _balances: BigNumberish[],
    _transactions: [BigNumberish, BigNumberish, BigNumberish][],
    _blocksize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  kill(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transactions(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    blocksize(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountBalances(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      _balances: BigNumberish[],
      _transactions: [BigNumberish, BigNumberish, BigNumberish][],
      _blocksize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kill(overrides?: CallOverrides): Promise<void>;

    transactions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    blocksize(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountBalances(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    init(
      _balances: BigNumberish[],
      _transactions: [BigNumberish, BigNumberish, BigNumberish][],
      _blocksize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transactions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balances(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blocksize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountBalances(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      _balances: BigNumberish[],
      _transactions: [BigNumberish, BigNumberish, BigNumberish][],
      _blocksize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    kill(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transactions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
